"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import dynamic from "next/dynamic";
import React, { useState } from 'react';
import { useCountries } from "@/app/lib/getCountries";
import { Skeleton } from "@/components/ui/skeleton";
import { CreatioBottomBar } from "@/app/components/CreationBottomBar";
import { createLocation } from "@/actions";
function AddressRoutw({ params }: { params: { id: string } }) {
  const LazyMap = dynamic(() => import("@/app/components/Map"), {
    ssr: false,
    loading: () => <Skeleton className="h-[50vh] w-full" />,
  });
  const { getAllCountries } = useCountries();
  const [locationValue, setLocationValue] = useState("");
  return (
    <>
      <div className='w-3/5 mx-auto'>
        <h2 className='text-3xl text-center font-semibold tracking-tight transition-colors mb-10'>where is your home located?</h2>
      </div>
      <form action={createLocation}>
        <input type="hidden" name="homeId" value={params.id} />
        <input type="hidden" name="countryValue" value={locationValue} />
        <div className='w-3/5 mx-auto mb-36'>
          <div className='mb-5'>
            <Select required onValueChange={(value: React.SetStateAction<string>) => setLocationValue(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Countries</SelectLabel>
                  {getAllCountries().map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.flag} {item.label} / {item.region}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <LazyMap locationValue={locationValue} />
        </div>
        <CreatioBottomBar />
      </form>
    </>
  );
}

export default AddressRoutw;
