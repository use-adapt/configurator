import React, { Component } from 'react';
import { Item, Button, Header, Icon, Container, Segment, Grid, Checkbox, List } from 'semantic-ui-react'
import data from '../data/data.json';

class Requirement extends React.Component {
  render() {
    return (
      <Checkbox
        key={this.props.name}
        name={this.props.name}
        label={<label name={this.props.name}>{this.props.name}</label>}
        onChange={this.props.onButtonClick}
        checked={this.props.selectStatus[this.props.name]}
        />
    );
  }
}

class RequirementCategory extends React.Component {
  render() {
    var elements = this.props.reqs.map((req) => (
      <List.Item key={req}>
        <Requirement
        name={req}
        onButtonClick={this.props.onButtonClick}
        selectStatus={this.props.selectStatus}
        />
      </List.Item>
    ));
    return (
      <Item>
        <Item.Content>
        <Header textAlign="center">{this.props.name}</Header>
        <List>
          {elements}
        </List>
        </Item.Content>
      </Item>

    );
  }
}

class RequirementSection extends React.Component {
  render() {
    const children = Object.keys(this.props.requirements).map((name) => {
      const reqs = this.props.requirements[name];
      return (
        <div key={name}>
          <RequirementCategory
            name={name}
            reqs={reqs}
            selectStatus={this.props.selectStatus}
            onButtonClick={this.props.onButtonClick}
            />
        </div>
      )
    });
    return (
      <div>
        <Header as="h2" textAlign="center">
          Requirements
        </Header>
      <Segment color="teal">
        <Grid padded='vertically' divided columns='equal' stackable stretched doubling verticalAlign='middle'>
          {children}
        </Grid>
      </Segment>
      </div>
    );
  }
}

class Configurator extends Component {
  render() {
    const categories = data.project.map((c) =>
      <RequirementSection category={c} />
    );
 
    return (
      <div className="Configurator">
            {categories}
      </div>
    );
  }
}

export default Configurator;
