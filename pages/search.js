import SearchLayout from '@/layouts/search'

export default function search({ tags, posts }) {
  return <SearchLayout tags={tags} posts={posts} />
}
export async function getStaticProps() {
  const posts = await getAllPosts({ onlyNewsletter: false })
  return {
    props: {
      posts
    },
    revalidate: 1
  }
}
