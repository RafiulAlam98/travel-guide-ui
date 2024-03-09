import './App.css'
import TravelCards from './components/TravelCards';
function App() {
  const travelGuru = {
    title: "Tour to Thiland",
    img: "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?t=st=1710002936~exp=1710006536~hmac=e85c8fb8c0447928d56f58fe35d91512c0951f97f6d4ce8d8c2d4f84c7cf5bc2&w=900f",
    cost: 1000,
    accomodation: "Two Couple room",
    food: "Sea food",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere",
  };


  return (
    <div className='travel-card-container'>
      <TravelCards travelGuru={travelGuru}></TravelCards>
      <TravelCards travelGuru={travelGuru}></TravelCards>
      <TravelCards travelGuru={travelGuru}></TravelCards>
      <TravelCards travelGuru={travelGuru}></TravelCards>
      <TravelCards travelGuru={travelGuru}></TravelCards>
    </div>
  )
}

export default App
