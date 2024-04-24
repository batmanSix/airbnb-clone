import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MapFilterItems } from "./components/MapFilterItems";
import prisma from "@/lib/db";
import ListingCard from "./components/ListingCard";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Suspense } from "react";
import { SkeltonCard } from "./components/SkeltonCard";
async function getData({
  searchParams
}: {
  searchParams?: {
    filter?: string
  }
}) {
  const data = await prisma.home.findMany({
    where: {
      addedCategory: true,
      addedLoaction: true,
      addedDescription: true,
      categoryName: searchParams?.filter ?? undefined
    },
    select: {
      photo: true,
      id: true,
      price: true,
      description: true,
      country: true,
    },
  });
  return data;
}


async function ShowItems({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
    country?: string;
    guest?: string;
    room?: string;
    bathroom?: string;
  };
}) {

  const wait = (seconds: number) => new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  await wait(1.5); // 
  const data = await getData({ searchParams: searchParams });
  return (
    <div className="grid lg:grid-cols-4 sm:grid-clos-2 md:grid-clos=3 gap-8 mt-8">
      {data.map((item, index) => {
        return (
          <ListingCard
            key={item.id}
            description={item.description as string}
            imagePath={item.photo as string}
            location={item.country as string}
            price={item.price as number}
          ></ListingCard>
        );
      })}
    </div>
  )
}

export default async function Home({
  searchParams
}: {
  searchParams?: {
    filter?: string
  }
}) {

  return (
    <div className="container mx-auto px-5 lg:px-10">
      <MapFilterItems></MapFilterItems>
      <Suspense key={searchParams?.filter} fallback={<SkeletonLoading></SkeletonLoading>}>
        <ShowItems searchParams={searchParams}></ShowItems>
      </Suspense>
    </div>
  );
}


function SkeletonLoading() {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
    </div>
  );
}
