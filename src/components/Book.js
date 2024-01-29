import Carousel from "./Carousel"
export default function Book(){
    return(
        <>
        <div className="container">
            <div className="row">
                <Carousel/>
            </div>
            <div className="row" id="summary">
            <div className="shadow p-3 mt-5 bg-body rounded text-center">
                <h2 className="display-4">Summary</h2>
                <p className="lead text-italic p-3" >Java is a widely-used programming language for coding web applications.<br/> It has been a popular choice among developers for over two decades, with millions of Java applications in use today.
                <br/> Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself.<br/>
                While most modern Java applications combine the Java runtime and application together,<br/> there are still many applications and even some websites that will not function unless you have a desktop Java installed.<br/> 
                Java.com, this website, is intended for consumers who may still require Java for their desktop applications <br/> specifically applications targeting Java 8.
                </p>
            </div>

            </div>
            <div className="row" id="info">
            <div className="shadow p-3 mt-5 bg-body rounded text-center">
                <h2 className="display-4">Book Content</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                    Chapter 1:The Mental Landscape
                    </li>
                    <li className="list-group-item">
                    Chapter 2: Programming in the Small I: Names and Things
                    </li>
                    <li className="list-group-item">
                    Chapter 3: Programming in the Small II: Control
                    </li>
                    <li className="list-group-item">
                    Chapter 4: Programming in the Large I: Subroutines
                    </li>
                    <li className="list-group-item">
                    Chapter 5: Programming in the Large II: Objects and Classes
                    </li>
                    <li className="list-group-item">Chapter 6: Applets, HTML, and GUI's</li>
                    <li className="list-group-item">Chapter 7: Advanced GUI Programming</li>
                    <li className="list-group-item">Chapter 8: Arrays</li>
                    <li className="list-group-item">Chapter 9: Correctness and Robustness</li>
                    <li className="list-group-item">Chapter 10: Advanced Input/Output</li>
                    <li className="list-group-item">
                    Chapter 11: Linked Data Structures and Recursion
                    </li>
                </ul>
            </div>
            <div className="row" id="buy">
             <button className="btn btn-primary shadow p-3 mt-5">
                        Buy
                    </button>
                
            </div>
                
            </div>
        </div>
         

        </>
    )
}