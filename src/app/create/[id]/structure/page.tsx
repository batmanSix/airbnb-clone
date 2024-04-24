import { SelctetCategory } from '@/app/components/SelectedCategory';
import { CreatioBottomBar } from "@/app/components/CreationBottomBar";
import { createCategoryPage } from "@/actions";
import React from 'react';

function StrucutreRoute({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="max-sm:w-full max-sm:text-center w-3/5 mx-auto">
        <h2 className="max-sm:text-xl text-3xl font-semibold tracking-tight transition-colors">
          Which of these best describe your Home?
        </h2>
      </div>

      <form action={createCategoryPage}>
        <input type="hidden" name="homeId" value={params.id} />
        <SelctetCategory />
        <CreatioBottomBar></CreatioBottomBar>

      </form >
    </>

  );
}

export default StrucutreRoute;
