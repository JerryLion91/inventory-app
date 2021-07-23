import * as React from 'react';
import Button from 'Components/Button';
import { JsxElement } from 'typescript';
import { Link } from 'react-router-dom';

const Footer = ({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: JsxElement | string;
}): JSX.Element => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s8">
            <h5 className="white-text">{title}</h5>
            <p className="grey-text text-lighten-4">{children}</p>
          </div>
          <div className="col l4 offset-l2 s4">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <Link className="white-text" to={'/'}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="white-text" to={'/clients'}>
                  Clientes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <p className="grey-text text-lighten-4 right">
            Todos os diretos reservados. © 2021 {title} Hiring Coders VTEX.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
