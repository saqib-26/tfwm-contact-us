/* eslint-disable react/prop-types */
import React from 'react';
import dompurify from 'dompurify';

const { sanitize } = dompurify;
// eslint-disable-next-line react/prop-types
const LastPage = ({ content, currentStep }) => {
  return (
    <>
      <h2 className="wmnds-m-t-sm">{currentStep?.heading}</h2>
      {content.heading && <h3>{content.heading}</h3>}
      {content.details?.includes('<a href=') ? (
        <div
          dangerouslySetInnerHTML={{
            __html: sanitize(content.details),
          }}
          className="wmnds-p-b-xs wmnds-p-t-md"
        />
      ) : (
        <p> {content.details}</p>
      )}
      <ul className="wmnds-unordered-list">
        {content.downloadText && (
          <li>
            <div className="wmnds-file-download">
              <div
                className="wmnds-file-download__desc wmnds-p-l-none"
                dangerouslySetInnerHTML={{
                  __html: sanitize(content.downloadText),
                }}
              />
            </div>
          </li>
        )}
        {content.info && <li>{content.info}</li>}
      </ul>
      {content.form && (
        <>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitize(content.form),
            }}
          />
          <br />
        </>
      )}
      {content.ringRideInfo && (
        <ul className="wmnds-unordered-list">
          {content.ringRideInfo.map((item) => (
            <li
              dangerouslySetInnerHTML={{
                __html: sanitize(item),
              }}
            />
          ))}
        </ul>
      )}
      {content.actionText && content.actionText !== 'Book now' && (
        <div className="wmnds-p-b-lg">
          <a
            href={content.actionLink}
            title={content.actionText}
            target="_self"
            className="wmnds-btn"
          >
            {content.actionText}
            <svg className="wmnds-btn__icon wmnds-btn__icon--right">
              <use xlinkHref="#wmnds-general-chevron-right" href="#wmnds-general-chevron-right" />
            </svg>
          </a>
        </div>
      )}
      {content.actionText === 'Book now' && (
        <a
          href={content.actionLink}
          title={content.actionText}
          target="_self"
          className="wmnds-btn wmnds-btn--start"
        >
          {content.actionText}
          <svg className="wmnds-btn__icon wmnds-btn__icon--right">
            <use xlinkHref="#wmnds-general-chevron-right" href="#wmnds-general-chevron-right" />
          </svg>
        </a>
      )}

      {content.heading2 && <h3>{content.heading2}</h3>}

      {content.details2 && (
        <p
          dangerouslySetInnerHTML={{
            __html: sanitize(content.details2),
          }}
        />
      )}
      {content.details3 && (
        <p
          dangerouslySetInnerHTML={{
            __html: sanitize(content.details3),
          }}
        />
      )}

      {content.warningText && (
        <div className="wmnds-warning-text wmnds-p-b-xs">
          <svg className="wmnds-warning-text__icon">
            <use xlinkHref="#wmnds-general-warning-circle" href="#wmnds-general-warning-circle" />
          </svg>
          <p
            dangerouslySetInnerHTML={{
              __html: sanitize(content.warningText),
            }}
          />
        </div>
      )}
      {content.table && (
        <table className="wmnds-table wmnds-table--without-header">
          <caption className="wmnds-table__caption">
            <h3>{content.tableHeading}</h3>
          </caption>
          <tbody>
            {content.table.map((item) => (
              <tr>
                <th
                  scope="row"
                  data-header="Header 1"
                  dangerouslySetInnerHTML={{ __html: sanitize(item.link) }}
                />
                <td>{item.ph}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {content.heading3 && <h3>{content.heading3}</h3>}
      {content.callHelp && <p>{content.callHelp}</p>}
      {content.customerService && (
        <div className="wmnds-inset-text" aria-label="customer services">
          <h4>{content.customerServiceInfo ? content.customerServiceInfo : 'Customer Services'}</h4>
          <p>{content.ph ? content.ph : 'Phone: 0345 303 6760'}</p>
          {content.timings ? (
            <p>{content.timings}</p>
          ) : (
            <>
              <div>Mondays, Tuesdays, Thursdays and Fridays, 8am to 6pm</div>
              <div>Wednesdays, 10am to 6pm</div>
              <div>Saturdays, 9am to 1pm</div>
              <div>Sundays and Bank Holidays, Closed</div>
            </>
          )}
        </div>
      )}

      <br />
      <br />
      <p
        dangerouslySetInnerHTML={{
          __html: sanitize(content.complaint),
        }}
      />
    </>
  );
};

export default LastPage;
