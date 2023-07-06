/* eslint-disable @next/next/no-img-element */
import { supabase } from "@/services/supabase";
import Link from "next/link";

export default async function Page() {
  const { data: people } = await supabase
    .from("people")
    .select("id, name, image, bio");

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
          hi
          {people.map((person) => (
            <p key={person.id}>
              <Link href={`/people/${person.name}`}>{person.name}</Link>
              <img src={person.image} alt={`image of ${person.name}`} />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
