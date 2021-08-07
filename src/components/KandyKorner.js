import { LocationList } from "./Location/LocationList"
import { LocationProvider } from "./Location/LocationProvider"

export const KandyKorner =()=> (
  <>
    <h2>Kandy Korner Main  Office</h2>
    <small>Where Sweat Teeth Meet Come To Play</small>
    <address>
      <div>Come by get some free samples!</div>
      <div>6363 Milky Way</div>
    </address>

    <h2>Store Locations</h2>
    <article className="locations">
      <LocationProvider>
        <LocationList />
      </LocationProvider>
    </article>
  </>
)