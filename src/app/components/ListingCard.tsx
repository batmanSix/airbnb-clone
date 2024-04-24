import React from 'react';
import Image from "next/image"
import Link from 'next/link';
import { useCountries } from '../lib/getCountries';
interface iAppProps {
  imagePath: string,
  description: string,
  location: string,
  price: number
}
function ListingCard(props: iAppProps) {
  const { getCountryByValue } = useCountries()
  const country = getCountryByValue(props.location)
  return (
    <div className='flex flex-col'>
      <div className='relative h-72'>
        <Image src={`https://xtssxlonlfbbibanpqkt.supabase.co/storage/v1/object/public/images/${props.imagePath}`} alt="Image of House" fill className='rounded-lg h-full'></Image>
      </div>
      <Link href={"/"}>
        <h3 className='font-medium text-base'>{country?.flag} {country?.label} / {country?.region}</h3>
        <p className='text-muted-foreground text-sm line-clamp-2'>{props.description}</p>
        <div className='pt-2 text-muted-foreground'>
          <span className='font-medium text-black'>${props.price}</span> Night
        </div>
      </Link>
    </div>
  );
}

export default ListingCard;
