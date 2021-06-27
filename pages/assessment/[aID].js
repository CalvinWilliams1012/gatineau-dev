import { useRouter } from 'next/router'
import AssessmentData from "../../components/AssessmentData/AssessmentData";

const Assessment = () => {
  const router = useRouter()
  const { aID } = router.query

  return <AssessmentData address={aID}/>
}

export default Assessment