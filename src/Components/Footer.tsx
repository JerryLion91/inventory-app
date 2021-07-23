import * as React from 'react';
import Button from 'Components/Button';
import { JsxElement } from 'typescript';

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
          <div className="col s12">
            <h5 className="white-text">{title}</h5>
            <p className="grey-text text-lighten-4">{children}</p>
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
