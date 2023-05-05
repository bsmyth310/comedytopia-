import React from 'react'

const Entrypage = () => {
  return (
    <body>
    <header>
      <img src="logo.png" alt="Comedy Central logo" />
      <nav>
        <ul>
          <li><a href="#">Sign Up</a></li>
          <li><a href="#">Log In</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section id="comics">
        <h1>Top Comics</h1>
        <ul>
          <li>Elon Musk</li>
          <li>Dave Chappelle</li>
          <li>Louis CK</li>
          <li>Bert Kreischer</li>
          <li>Andrew Schiltz</li>
          <li>Matt Rife</li>
          <li>Mark Norman</li>
          <li>Bill Burr</li>
        </ul>
      </section>
      <section id="upcoming-shows">
        <h2>Upcoming Shows</h2>
        <ul>
          <li>June 1 - Dave Chappelle Live</li>
          <li>June 15 - Louis CK Stand-up</li>
          <li>July 3 - Matt Rife Comedy Tour</li>
          <li>July 10 - Bert Kreischer: The Berty Boy World Tour</li>
          <li>July 20 - Mark Norman: Out To Lunch Tour</li>
        </ul>
      </section>
      <section id="iframe-container">
        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" width="560" height="315"></iframe>
      </section>
    </main>
    <footer>
      <p>&copy; 2023 Comedy Central</p>
    </footer>
  </body>
  )
}

export default Entrypage