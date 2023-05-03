import { getSortedThoughtsData } from "../../lib/thoughts";
import dateFormat from 'dateformat';
import Head from "next/head";
import Link from "next/link";


export default function Thoughts ({ allThoughtsData }) {

    return (
      

        <div className="thoughts">
            <h1>Thoughts</h1>
           
            <ul>
                {allThoughtsData.map(({ id, title, date }) => (
                    <li key={id}>
                        <Link href={`/thoughts/${id}`}>{title}</Link>
                        <br />
                        <small>{dateFormat(date, "dddd, mmmm dS, yyyy")}</small>
                    </li>
                ))}

            </ul>

            {
            allNerdData.length === 0 && (
                <p>Sorry, No thoughts yet.</p>
            )
          }
        </div>
       
    );
}

export async function getStaticProps() {
    const allThoughtsData = getSortedThoughtsData();
    return {
        props: {
            allThoughtsData
        }
    };
}


