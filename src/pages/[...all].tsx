import { useParams } from 'react-router'

function NotFoundPage() {
  const params = useParams()

  return (
    <div>
      <h1>
        404 - Page
        {params['*']}
        {' '}
        Not Found
      </h1>
    </div>
  )
}

export default NotFoundPage
