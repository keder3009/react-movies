import "./App.css";
import Pelicula from "./Pelicula";
import PageWrapper from "./PageWrapper";

function App() {
  return (
    <PageWrapper>
      <Pelicula
        titulo="oblivion (2012)"
        calificacion="8.1"
        director="Joss Whedon"
        actores="Robert Downey Jr., Chris Evans, Chris Hemsworth"
        fecha="1 May 2015"
        duracion="2h21"
        img="mv1.jpg"
      >
        Earth's mightiest heroes must come together and learn to fight as a team
        if they are to stop the mischievous Loki and his alien army from
        enslaving humanity...s
      </Pelicula>
      {/* <div className="movie-item-style-2">
                <img src="images/uploads/mv1.jpg" alt="" />
                <div className="mv-item-infor">
                  <h6>
                    <a href="moviesingle.html">
                      oblivion <span>(2012)</span>
                    </a>
                  </h6>
                  <p className="rate">
                    <i className="ion-android-star"></i>
                    <span>8.1</span> /10
                  </p>
                  <p className="describe">
                    Earth's mightiest heroes must come together and learn to
                    fight as a team if they are to stop the mischievous Loki and
                    his alien army from enslaving humanity...
                  </p>
                  <p className="run-time">
                    {" "}
                    Run Time: 2h21’ . <span>MMPA: PG-13 </span> .{" "}
                    <span>Release: 1 May 2015</span>
                  </p>
                  <p>
                    Director: <a href="#">Joss Whedon</a>
                  </p>
                  <p>
                    Stars: <a href="#">Robert Downey Jr.,</a>{" "}
                    <a href="#">Chris Evans,</a>{" "}
                    <a href="#"> Chris Hemsworth</a>
                  </p>
                </div>
              </div> */}

      {/* <div className="movie-item-style-2">
                <img src="images/uploads/mv2.jpg" alt=""></img>
                <div className="mv-item-infor">
                  <h6>
                    <a href="moviesingle.html">
                      into the wild <span>(2014)</span>
                    </a>
                  </h6>
                  <p className="rate">
                    <i className="ion-android-star"></i>
                    <span>7.8</span> /10
                  </p>
                  <p className="describe">
                    As Steve Rogers struggles to embrace his role in the modern
                    world, he teams up with a fellow Avenger and S.H.I.E.L.D
                    agent, Black Widow, to battle a new threat...
                  </p>
                  <p className="run-time">
                    {" "}
                    Run Time: 2h21’ . <span>MMPA: PG-13 </span> .{" "}
                    <span>Release: 1 May 2015</span>
                  </p>
                  <p>
                    Director: <a href="#">Anthony Russo,</a>
                    <a href="#">Joe Russo</a>
                  </p>
                  <p>
                    Stars: <a href="#">Chris Evans,</a>{" "}
                    <a href="#">Samuel L. Jackson,</a>{" "}
                    <a href="#"> Scarlett Johansson</a>
                  </p>
                </div>
              </div>

              <div className="movie-item-style-2">
                <img src="images/uploads/mv3.jpg" alt="" />
                <div className="mv-item-infor">
                  <h6>
                    <a href="moviesingle.html">
                      blade runner <span>(2015)</span>
                    </a>
                  </h6>
                  <p className="rate">
                    <i className="ion-android-star"></i>
                    <span>7.3</span> /10
                  </p>
                  <p className="describe">
                    Armed with a super-suit with the astonishing ability to
                    shrink in scale but increase in strength, cat burglar Scott
                    Lang must embrace his inner hero and help...
                  </p>
                  <p className="run-time">
                    {" "}
                    Run Time: 2h21’ . <span>MMPA: PG-13 </span> .{" "}
                    <span>Release: 1 May 2015</span>
                  </p>
                  <p>
                    Director: <a href="#">Peyton Reed</a>
                  </p>
                  <p>
                    Stars: <a href="#">Paul Rudd,</a>{" "}
                    <a href="#"> Michael Douglas</a>
                  </p>
                </div>
              </div>

              <div className="movie-item-style-2">
                <img src="images/uploads/mv4.jpg" alt="" />
                <div className="mv-item-infor">
                  <h6>
                    <a href="moviesingle.html">
                      Mulholland pride<span> (2013) </span>
                    </a>
                  </h6>
                  <p className="rate">
                    <i className="ion-android-star"></i>
                    <span>7.2</span> /10
                  </p>
                  <p className="describe">
                    When Tony Stark's world is torn apart by a formidable
                    terrorist called the Mandarin, he starts an odyssey of
                    rebuilding and retribution.
                  </p>
                  <p className="run-time">
                    {" "}
                    Run Time: 2h21’ . <span>MMPA: PG-13 </span> .{" "}
                    <span>Release: 1 May 2015</span>
                  </p>
                  <p>
                    Director: <a href="#">Shane Black</a>
                  </p>
                  <p>
                    Stars: <a href="#">Robert Downey Jr., </a>{" "}
                    <a href="#"> Guy Pearce,</a>
                    <a href="#">Don Cheadle</a>
                  </p>
                </div>
              </div>

              <div className="movie-item-style-2">
                <img src="images/uploads/mv5.jpg" alt="" />
                <div className="mv-item-infor">
                  <h6>
                    <a href="moviesingle.html">
                      skyfall: evil of boss<span> (2013) </span>
                    </a>
                  </h6>
                  <p className="rate">
                    <i className="ion-android-star"></i>
                    <span>7.0</span> /10
                  </p>
                  <p className="describe">
                    When Tony Stark's world is torn apart by a formidable
                    terrorist called the Mandarin, he starts an odyssey of
                    rebuilding and retribution.
                  </p>
                  <p className="run-time">
                    {" "}
                    Run Time: 2h21’ . <span>MMPA: PG-13 </span> .{" "}
                    <span>Release: 1 May 2015</span>
                  </p>
                  <p>
                    Director: <a href="#">Alan Taylor</a>
                  </p>
                  <p>
                    Stars: <a href="#">Chris Hemsworth, </a>{" "}
                    <a href="#"> Natalie Portman,</a>
                    <a href="#">Tom Hiddleston</a>
                  </p>
                </div>
              </div> */}
    </PageWrapper>
  );
}

export default App;
