import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CmsSection from '../cms/CmsSection';
import CmsArea from '../cms/CmsArea';
import Button from '../inputs/Button';

class CmsPage extends Component {
  constructor(props) {
    super(props);

    this.addSection = this.addSection.bind(this);
  }

  addSection() {
    const { cms, cmsActions } = this.props,
      id = Math.random();
    cmsActions.addSection({
      id,
      position: cms.sections.length,
    });
    cmsActions.addArea({
      id: Math.random(),
      content: 'Some dummy content',
      section_id: id,
    });
  }

  render() {
    const { cms, cmsActions } = this.props;
    return (
      <div className="cms">
        <Button
          buttonText="Add New Section"
          classNames=""
          disableButton={false}
          onClick={this.addSection}
        />
        {cms.sections && cms.sections.map((section, i, arr) => (
          <CmsSection
            key={section.id}
            cmsActions={cmsActions}
            position={section.position || i}
            section={section}
            isLast={i === arr.length - 1}
          >
            {cms.areas.map(
              area => section.id === area.section_id
              && <CmsArea key={area.id} area={area} />,
            )}
          </CmsSection>
        )).reverse()}
      </div>
    );
  }
}

CmsPage.propTypes = {
  cmsActions: PropTypes.shape({}).isRequired,
  cms: PropTypes.shape({}).isRequired,
};

export default CmsPage;
