import { Navbar } from 'rsuite'

function App() {
  return (
  <Navbar appearance="inverse">
      <Navbar.Brand {...{href: "https://playwright.tech"}}>
        <strong>Playwright</strong>{' '}
      </Navbar.Brand>
    </Navbar>
  )
}

export default App
