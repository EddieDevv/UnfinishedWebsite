import React, { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";

function HomeLeft() {

    useEffect(() => {
        AOS.init({
            once: true
        });
        AOS.refresh();
    }, []);

    return (
        <div>
            <div className="flex w-3/4 mx-auto my-12 items-center leading-loose">
                <img className="w-1/3 rounded" data-aos="fade-up" src="https://images.unsplash.com/photo-1623715056534-f8052f1dfd86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1543&q=80" alt=""/>
                <div className="ml-4 p-4">
                    <h3 className="mb-4 text-2xl font-semibold">Lorem Ipsum</h3>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            <hr className="mx-auto w-3/4"/>
        </div>
    )
}

export default HomeLeft