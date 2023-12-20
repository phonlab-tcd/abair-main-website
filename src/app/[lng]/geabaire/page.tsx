'use client'
import { useRouter } from "next/navigation"

export default function Geabaire(props: any) {
  const router = useRouter();
  router.push("https://geabaire.abair.ie");
}