import { useParams } from 'react-router'

function DemoDetail() {
  const params = useParams<{ id: string }>()
  return (
    <div>
      <h1>
        demo detail, demo id is
        {params.id}
      </h1>
    </div>
  )
}

export default DemoDetail
