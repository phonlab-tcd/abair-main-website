/* eslint-disable @next/next/no-img-element */
import { supabase } from "@/services/supabase";
import Link from "next/link";

interface PublicationModel {
  id: number;
  title: string;
}

interface PersonModel {
  id: number;
  name: string;
  image: string;
  bio: string;
  ab_publications: PublicationModel[];
}

export default async function Page() {
  const { data: people } = await supabase
    .from("people")
    .select("id, name, image, bio, ab_publications ( id, title )");

  if (!people) {
    return <p>No people found.</p>;
  }

  return (
    <div className="w-screen">
      <div className="absolute w-full flex justify-center">
        <div className="text-4xl md:text-6xl text-black text-center">
          People
        </div>
        <div>
          {people.map((p) => (
            <Person
              key={p.id}
              name={p.name}
              id={p.id}
              bio={p.bio}
              ab_publications={p.ab_publications}
              image={p.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Person = ({ id, name, image, bio, ab_publications }: PersonModel) => {
  return (
    <div>
      <p key={id}>
        <Link href={`/people/${name}`}>{name}</Link>
        <img src={image} alt={`image of ${name}`} />
        {ab_publications.map((pub) => (
          <p key={pub.id}>{pub.title}</p>
        ))}
      </p>
    </div>
  );
};
