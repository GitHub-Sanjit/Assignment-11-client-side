import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Blogs = () => {
  return (
    <div>
      <Header></Header>
      <div className="mx-4">
        <div>
          <div>
            <h5>Question 1: Difference Between SQL and NoSQL?</h5>
          </div>
          <div className="mb-4">
            <u>Answer</u> : SQL and NoSQL differ in whether they are relational
            (SQL) or non-relational (NoSQL), whether their schemas are
            predefined or dynamic, how they scale, the type of data they include
            and whether they are more fit for multi-row transactions or
            unstructured data. SQL is a decades-old method for accessing
            relational databases, and most who work with databases are familiar
            with it. As unstructured data, amounts of storage and processing
            power and types of analytics have changed over the years, however,
            we’ve seen different database technologies become available that are
            a better fit for newer types of use cases. These databases are
            commonly called NoSQL. Selecting or suggesting a database is a key
            responsibility for most database experts, and “SQL vs. NoSQL'' is a
            helpful rubric for informed decision-making. When considering either
            database, it is also important to consider critical data needs and
            acceptable tradeoffs conducive to meeting performance and uptime
            goals.
          </div>
          <div>
            <h5>Question 2: What is JWT. And How does it Works?</h5>
          </div>
          <div className="mb-4">
            <u>Answer</u> : JSON Web Token (JWT) is an open standard (RFC 7519)
            that defines a compact and self-contained way for securely
            transmitting information between parties as a JSON object. This
            information can be verified and trusted because it is digitally
            signed. JWT, or JSON Web Token, is an open standard used to share
            security information between two parties — a client and a server.
            Each JWT contains encoded JSON objects, including a set of claims.
            JWTs are signed using a cryptographic algorithm to ensure that the
            claims cannot be altered after the token is issued. JWTs differ from
            other web tokens in that they contain a set of claims. Claims are
            used to transmit information between two parties. What these claims
            are depends on the use case at hand. For example, a claim may assert
            who issued the token, how long it is valid for, or what permissions
            the client has been granted. A JWT is a string made up of three
            parts, separated by dots (.), and serialized using base64. In the
            most common serialization format, compact serialization, the JWT
            looks something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will
            get two JSON strings: The header and the payload. The signature. The
            JOSE (JSON Object Signing and Encryption) header contains the type
            of token — JWT in this case — and the signing algorithm. The payload
            contains the claims. This is displayed as a JSON string, usually
            containing no more than a dozen fields to keep the JWT compact. This
            information is typically used by the server to verify that the user
            has permission to perform the action they are requesting. There are
            no mandatory claims for a JWT, but overlaying standards may make
            claims mandatory. For example, when using JWT as bearer access token
            under OAuth2.0, iss, sub, aud, and exp must be present. some are
            more common than others. The signature ensures that the token hasn’t
            been altered. The party that creates the JWT signs the header and
            payload with a secret that is known to both the issuer and receiver,
            or with a private key known only to the sender. When the token is
            used, the receiving party verifies that the header and payload match
            the signature.
          </div>
          <div>
            <h5>
              Question 3: What is the difference between JavaScript and NodeJs?
            </h5>
          </div>
          <div className="mb-4">
            <u>Answer</u> : JavaScript is a simple programming language that can
            be used with any browser that has the JavaScript Engine installed.
            Node. js, on the other hand, is an interpreter or execution
            environment for the JavaScript programming language.
            <ul>
              <li>
                1. JavaScript is a client-side scripting language that is
                lightweight, cross-platform, and interpreted. Both Java and HTML
                include it. Node.js, on the other hand, is a V8-based
                server-side programming language. As a result, it is used to
                create network-centric applications. It's a networked system
                made for data-intensive real-time applications. If we compare
                node js vs. python, it is clear that node js will always be the
                preferred option.
              </li>
              <li>
                2. JavaScript is a simple programming language that can be used
                with any browser that has the JavaScript Engine installed.
                Node.js, on the other hand, is an interpreter or execution
                environment for the JavaScript programming language. It requires
                libraries that can be conveniently accessed from JavaScript
                programming to be more helpful.
              </li>
              <li>
                3. Any engine may run JavaScript. As a result, writing
                JavaScript is incredibly easy, and any working environment is
                similar to a complete browser. Node.js, on the other hand, only
                enables the V8 engine. Written JavaScript code, on the other
                hand, can run in any context, regardless of whether the V8
                engine is supported.
              </li>
              <li>
                4. A specific non-blocking operation is required to access any
                operating system. There are a few essential objects in
                JavaScript, but they are entirely OS-specific. Node.js, on the
                other hand, can now operate non-blocking software tasks out of
                any JavaScript programming. It contains no OS-specific
                constants. Node.js establishes a strong relationship with the
                system files, allowing companies to read and write to the hard
                drive.
              </li>
              <li>
                5. The critical benefits of JavaScript include a wide choice of
                interfaces and interactions and just the proper amount of server
                contact and direct visitor input. Node.js, on the other hand,
                offers node package management with over 500 modules and the
                capacity to handle many requests at the same time. It also
                offers the unique ability to enable microservice architecture
                and the Internet of Things. Even when comparing node js vs.
                react js, node js always wins.
              </li>
            </ul>
          </div>
          <div>
            <h5>
              Question 4: How does NodeJs handle multiple request at the same
              time?
            </h5>
          </div>
          <div className="mb-4">
            <u>Answer</u> : NodeJS receives multiple client requests and places
            them into EventQueue. NodeJS is built with the concept of
            event-driven architecture. NodeJS has its own EventLoop which is an
            infinite loop that receives requests and processes them. <br />{" "}
            NodeJS server uses an EventQueue, which queues incoming client
            requests and an EventLoop which is an infinite loop that receives
            requests and processes them. This EventLoop is single threaded and
            acts as a listener for the EventQueue which processes incoming
            requests based on FIFO policy. <br />
            When a new request comes in, NodeJS checks if it requires any
            blocking IO operations, if not, the EventLoop processes it and sends
            the response back to the client directly. If yes, then the request
            is forwarded to the thread manager, which then based on an
            algorithm, picks up an idle thread from the pool and lets it process
            the request. After completion of the request processing operation,
            the thread, returns the response back to the EventLoop which is then
            forwarded to the client. Thus, even if an incoming request needs
            blocking IO, the thread pool allows it to run asynchronously in the
            background without blocking the EventLoop and it gives a seamless
            experience of NodeJS handling multiple incoming requests
            concurrently without any persistent delays or bottlenecks.
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
