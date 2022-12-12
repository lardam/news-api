import NewsCard from "../components/NewsCard"

export default function Home({ articles }) {
  return (
    <main className="p-5 md:py-10 md:px-16 lg:px-24 xl:px-36 bg-neutral-100">
      <NewsCard articles={articles} />
    </main>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=ar&apiKey=47268f5b0d1f4abab9edce9ce682add6')
  const {articles} = await response.json()

  return {
    props: {
      articles
    }
  }
}