import {useParams} from 'react-router-dom'

export default function CityDetail() {
    const {city_id} = useParams()
  return (
    <div>CityDetail {city_id}under construction</div>
  )
}
