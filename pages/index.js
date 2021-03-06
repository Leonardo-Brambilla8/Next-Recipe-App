import Head from 'next/head'
import Link from 'next/link'
import { SanityClient,urlFor } from '../lib/sanity'

const recipesQuery = `*[_type=="recipe"]{ 
    _id,
    name,
    slug,
    mainImage,  
}`

export default function Home({recipes}) {

  return (
    <div>
      <Head>
        <title>billys kitchen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>welcome to billys kitchen</h1>
      <ul className="recipes-list">
        {recipes?.length > 0 && 
          recipes.map((recipe,index)=>(
            <li key={recipe._id} className="recipe-card">
            <Link href={`/recipes/${recipe.slug.current}`}>
              <a>
                <img src={urlFor(recipe.mainImage).url()} alt={recipe.name}/>
                <span>{recipe.name}</span>  
              </a>  
            </Link>
          </li>
          ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const recipes = await SanityClient.fetch(recipesQuery);
  return { props: { recipes } };
}








  // {photos.map((item, index)=>(
  //   <PhotoItem
  //     key={index}
  //     url={item.url}
  //     name={item.name}
  //     onDelete={handleDeleteClick}
  //   />
  // ))}