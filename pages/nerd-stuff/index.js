import { getSortedNerdData } from "../../lib/nerd";
import dateFormat from 'dateformat';
import Head from "next/head";
import Link from "next/link";


export default function Nerd ({ allNerdData }) {

    return (
      

        <div className="thoughts">
            <h1>Nerd Stuff</h1>
            <ul>
                {allNerdData.map(({ id, title, date }) => (
                    <li key={id}>
                        <Link href={`/nerd-stuff/${id}`}>{title}</Link>
                        <br />
                        <small>{dateFormat(date, "dddd, mmmm dS, yyyy")}</small>
                    </li>
                ))}

            </ul>

          {
            allNerdData.length === 0 && (
                <p>Sorry, No nerd stuff yet.</p>
            )
          }
            
        </div>
       
    );
}

export async function getStaticProps() {
    const allNerdData = getSortedNerdData();
    return {
        props: {
            allNerdData
        }
    };
}


