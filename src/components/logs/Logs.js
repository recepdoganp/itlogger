import React, { useEffect } from "react";
import LogItem from "./LogItem";
import Preloader from "../layouts/Preloader";
import PropTypes from "prop-types";

// implemet and conenct redux in a component
import { connect } from "react-redux";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    // getlogs is attached to the props
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show...</p>
      ) : (
        logs.map(log => {
          return <LogItem log={log} key={log.id} />;
        })
      )}
    </ul>
  );
};

Logs.prototypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ log: state.log });

export default connect(mapStateToProps, { getLogs })(Logs);
