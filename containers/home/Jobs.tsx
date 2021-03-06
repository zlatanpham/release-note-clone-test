import React, { useState, useMemo } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Select from 'components/Select';
import Button from 'components/Button';
import Container from 'components/Container';
import { H3, H6 } from 'components/typography';
import classnames from 'classnames';
import items from '../../sources/jobs/index.json';

dayjs.extend(relativeTime);

const Jobs = () => {
  const [titleFilter, setTitleFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  const titleOptions = useMemo(
    () => [
      { value: 'all', text: 'All Positions' },
      // get unique job titles to show as options
      ...items
        .filter(
          ({ location }) =>
            locationFilter === 'all' || location === locationFilter
        )
        .map(({ title }) => title)
        .sort()
        .filter((jobTitle, i, array) => array.indexOf(jobTitle) === i)
        .map(jobTitle => ({ value: jobTitle, text: jobTitle }))
    ],
    [locationFilter]
  );

  const locationOptions = useMemo(
    () => [
      { value: 'all', text: 'All Locations' },
      // get unique job locations to show as options
      ...items
        .filter(({ title }) => titleFilter === 'all' || title === titleFilter)
        .map(({ location }) => location)
        .sort()
        .filter((location, i, array) => array.indexOf(location) === i)
        .map(location => ({ value: location, text: location }))
    ],
    [titleFilter]
  );

  const filterList = items.filter(({ location, title }) => {
    return (
      (titleFilter === 'all' ||
        (titleFilter !== 'all' && titleFilter === title)) &&
      (locationFilter === 'all' ||
        (locationFilter !== 'all' && locationFilter === location))
    );
  });

  return (
    <section id="jobs" className="sm:mt-10 mt-2 lg:mt-24 pt-10 lg:pb-10">
      <Container>
        <div className="flex items-center flex-wrap sm:flex-nowrap">
          <div className="flex sm:items-center sm:flex-row flex-col w-full">
            <H3 className="flex sm:flex-row flex-col items-start sm:items-center justify-between">
              Openings{' '}
              <Button className="sm:hidden block sm:mt-0 mt-5">
                Post a job
              </Button>
            </H3>
            <div className="flex items-center justify-between sm:w-auto w-full sm:mt-0 mt-5 sm:border-none border-t border-b border-gray-200 sm:py-0 py-4 sm:-mx-5 sm:pl-10">
              <div className="w-1/2 sm:w-48 sm:px-5 pr-3">
                <Select
                  name="title"
                  value={titleFilter}
                  onChange={e => {
                    setTitleFilter(e.target.value);
                  }}
                  options={titleOptions}
                />
              </div>
              <div className="w-1/2 sm:w-48 sm:px-5 pl-3">
                <Select
                  name="location"
                  value={locationFilter}
                  options={locationOptions}
                  onChange={e => {
                    setLocationFilter(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-32 flex-grow text-right sm:block hidden">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/awesome-jobs/vietnam/issues"
            >
              <Button>Post a job</Button>
            </a>
          </div>
        </div>

        <div className="mt-7">
          {filterList.length === 0 ? (
            <div className="pt-6 border-t border-gray-200">
              There is no available position
            </div>
          ) : (
            filterList.map(
              (
                { company, title, location, type, date, linkURL, salaryRange },
                index
              ) => {
                return (
                  <div
                    key={index}
                    className={classnames(
                      'flex py-4 items-center justify-between',
                      {
                        'border-b border-gray-200':
                          index < filterList.length - 1
                      }
                    )}
                  >
                    <div className="text-gray-800">
                      <a
                        href={linkURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <H6 className="hover:text-primary transition-colors duration-200">
                          {title}
                        </H6>
                      </a>
                      <div className="space-x-2">
                        <span># {company}</span>{' '}
                        {salaryRange && <span>({salaryRange})</span>}
                      </div>
                    </div>
                    <div className="text-sm text-right">
                      <div className="font-bold mb-1 text-gray-700">
                        {location} - {type}
                      </div>
                      <div className="text-gray-500">
                        {dayjs().to(dayjs(date))}
                      </div>
                    </div>
                  </div>
                );
              }
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default Jobs;
