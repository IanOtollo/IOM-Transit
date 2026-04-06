"use client";

import { useParams, notFound } from "next/navigation";
import { subjectData } from "@/lib/subject-data";
import SubjectPageTemplate from "@/components/SubjectPageTemplate";

export default function SolutionPage() {
  const params = useParams();
  const id = params.id as string;
  const data = subjectData[id];

  if (!data) return notFound();

  return <SubjectPageTemplate data={data} />;
}
