import React from 'react';
import Container from 'components/Container';
import classnames from 'classnames';

const listContent = [
  {
    title: 'Share & Learn',
    description: 'Space for developers to share the latest technical topics'
  },
  {
    title: 'Meet',
    description:
      'A gathering for developers to meet, catch up, and get to know new friends'
  },
  {
    title: 'Connect',
    description: 'An opportunity to connect developers with companies/projects'
  }
];
const Goals = () => {
  return (
    <section className="py-16 lg:py-24 bg-primary text-gray-100 font-normal">
      <Container>
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-6">Goals of WeBuild Day</h2>
          <p className="text-lg mb-8">
            As an umbrella community with a broad network from&nbsp;
            <strong>Golang, Ruby, Rust, Elixir, Mobile, JavaScript</strong>
            &nbsp; and with support from Google Developer Group, we want to host
            WeBuild Day with the following objectives:
          </p>

          <ul className="flex flex-wrap lg:flex-nowrap -mx-2">
            {listContent.map(({ title, description }) => (
              <li
                key={title}
                className={classnames('flex mb-4 lg:mb-0 w-1/2 px-2')}
              >
                <div className="bg-white flex-shrink-0 w-2 h-2 transform rotate-45 translate-y-3 mr-2" />
                <div>
                  <p className="text-lg font-bold mb-1">{title}</p>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Goals;
