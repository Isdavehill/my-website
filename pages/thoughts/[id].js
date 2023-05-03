import { getAllThoughtIds, getThoughtData, getSortedThoughtsData } from "../../lib/thoughts";
import { useEffect } from "react";
import dateFormat from 'dateformat';

export default function Thought({ thoughtData }) {
    useEffect(() => {
        document.title = thoughtData.title;
    }, [thoughtData]);

    return (
        <div className="thought">
            <h1>{thoughtData.title}</h1>
            <small>{dateFormat(thoughtData.date, "mmmm dS, yyyy")}</small>
            <div dangerouslySetInnerHTML={{ __html: thoughtData.contentHtml }} />
        </div>
    );


}

export async function getStaticProps({ params }) {
    const thoughtData = await getThoughtData(params.id);
    const allThoughtsData = getSortedThoughtsData();
    let allRelatedThoughts = [];
    
    try {
        allRelatedThoughts = allThoughtsData
        .filter (
            (thought) =>
               thought.id !== params.id && hasRelatedTags(thoughtData, thought)
        )
        .slice(0, 3);
    }
    catch (error) {
        allRelatedThoughts = [];
    }

    return {
        props: {
            thoughtData,
            allRelatedThoughts
        }
    };

}

export async function getStaticPaths() {
    const paths = getAllThoughtIds();
    return {
        paths,
        fallback: false
    };
}

function hasRelatedTags(thoughtData, thought) {
    const thoughtTags = thoughtData.tags.map(tag => tag.toLowerCase());
    const relatedThoughtTags = thought.tags.map(tag => tag.toLowerCase());
    return thoughtTags.some(tag => relatedThoughtTags.includes(tag));
}

