import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="jumbotron mt-5 pt-3">
        <h1 className="display-3">Hey mate !</h1>
        <p className="lead">
          welcome to Free Movie API This is a simple API unit, a simple way to
          find search movies Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Odio saepe a numquam, illo quas repudiandae aliquid sapiente
          dignissimos perferendis vero delectus nobis eos. Repudiandae quibusdam
          distinctio aspernatur, eveniet minima expedita.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <a className="btn btn-danger btn-lg mr-3" href="#" role="button">
            Sign up
          </a>
          <a className="btn btn-success btn-lg ml-3 " href="#" role="button">
            Sign in{" "}
          </a>
        </p>
      </div>
    </div>
  );
}
