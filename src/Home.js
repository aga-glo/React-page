import React, {Component} from "react";

class Home extends Component {
    render() {
        return (
           
            <div>
                <h2>WELCOME!</h2>
                <p>My name is Agnieszka Głowacka and I am a student of Computer Science at the Cracow University of Technology - Politechnika Krakowska. I already have some commercial IT experience but I plan my career path towards front-end programming.</p>
                    <p> I would like to invite you to visit my profile on  <a href="https://pl.linkedin.com/in/agnieszka-g%C5%82owacka-938b93177">LinkedIn</a> and <a href="https://github.com/aga-glo">Github</a>.</p>

                    <img src="https://user-images.githubusercontent.com/56108700/141132453-045018b0-7d37-437a-a690-c4d53579d52a.jpg" alt="pic"></img>
                    <p>This page is created in React, JS, some CSS and HTML as a project ( I mostly focus here on JS so styles are quite poor ).</p>
                 <p>   Here you can find something more UX/UI nicer -<a href="https://aga-glo.github.io/"> CLICK ME!</a>
                </p>
            </div>
        );
    }
}
export default Home;
