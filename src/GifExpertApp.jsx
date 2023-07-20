import { useState } from "react";
import { AddCategory, GifGrid } from "./components/"


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = ( newCategory ) => {

    if( categories.includes( newCategory ) ) return;

    console.log( newCategory );
    // categories.push(newCategory)
    // categories.push('Valorant');
    // console.log('Valorant');
    setCategories( [ newCategory, ...categories ] );
    // setCategories( cat => [...cat,'Valorant'] );

  }
  
//   console.log(setCategories);
  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={ (value) => onAddCategory( value ) }
      />

        { categories.map( category => ( 
            <GifGrid 
                key={category} 
                category={category}/> 
            )) 
        }
        {/*<li>ABC</li>*/}
      
      {/* Gif Item */}
    </>
  );
};
