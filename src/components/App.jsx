import Painting from "./Painting"
import friends from "./friends.json";


export default function App() {
  return (
<div>
      <Painting image={friends[0].avatar} name={friends[0].name} activity={friends[0].isOnline} />
 </div>
  )

};
