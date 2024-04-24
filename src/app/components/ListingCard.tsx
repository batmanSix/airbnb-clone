import React from 'react';
import Image from "next/image"
import Link from 'next/link';
import { useCountries } from '../lib/getCountries';
import { Heart } from 'lucide-react';
import { AddToFavoriteButton, DeleteFromFavoriteButton } from "./SubmitButtons";
import { addToFavorite, DeleteFromFavorite } from '@/actions';
interface iAppProps {
  imagePath: string,
  description: string,
  location: string,
  price: number,
  userId: string | undefined
  isInFavoriteList: boolean,
  favoriteId: string,
  homeId: string;
  pathName: string;
}
function ListingCard(props: iAppProps) {
  const { getCountryByValue } = useCountries()
  const country = getCountryByValue(props.location)
  return (
    <div className='flex flex-col'>
      <div className='relative h-72'>
        <Image src={`https://xtssxlonlfbbibanpqkt.supabase.co/storage/v1/object/public/images/${props.imagePath}`} alt="Image of House" fill className='rounded-lg h-full'></Image>
        {
          props.userId && (
            <div className='z-10 absolute top-2 right-2'>
              {
                props.isInFavoriteList ? (
                  <form action={DeleteFromFavorite}>
                    <input type="hidden" name="favoriteId" value={props.favoriteId} />
                    <input type="hidden" name="userId" value={props.userId} />
                    <input type="hidden" name="pathName" value={props.pathName} />
                    <DeleteFromFavoriteButton />
                  </form>
                ) : (
                  <form action={addToFavorite}>
                    <input type='hidden' name="homeId" value={props.homeId}></input>
                    <input type='hidden' name="userId" value={props.userId}></input>
                    <input type="hidden" name="pathName" value={props.pathName} />
                    <AddToFavoriteButton></AddToFavoriteButton>
                  </form>
                )
              }

            </div>
          )
        }
      </div>
      <Link href={`/home/${props.homeId}`} className="mt-2">
        <h3 className="font-medium text-base">
          {country?.flag} {country?.label} / {country?.region}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {props.description}
        </p>
        <p className="pt-2 text-muted-foreground">
          <span className="font-medium text-black">${props.price}</span> Night
        </p>
      </Link>
    </div>
  );
}

export default ListingCard;
