import Link from "next/link"
import Image from "next/image"

export default function NewsCard({ articles }) {
  return (
    <div id="article-grid" className="grid gap-y-3 md:gap-y-10">
      {articles.map((art, index) => (
        <article key={index} className="rounded bg-amber-100 p-2 md:p-6 grid gap-y-2 lg:grid-cols-2 lg:gap-x-8 lg:justify-evenly lg:w-3/4 lg:justify-self-center">
          <img src={art.urlToImage} alt={art.title} className="lg:row-span-full object-fill lg:max-h-72 lg:aspect-5/3" />
          <div>
            <Link href={art.url}><h1 className="text-2xl font-bold lg:mb-8">{art.title}</h1></Link>
            <p className="lg:mb-4">{art.description}</p>
            <Link href={art.url} className="font-extralight flex gap-x-1 max-h-6"><Image alt="Read article" src='/glasses.png' height={20} width={20}/>Leer artículo completo</Link>
          </div>
        </article>
      ))}
    </div>
  )
}