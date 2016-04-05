import React from 'react';

class ToTopButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', (event) => {
      const scrollY = window.scrollY;
      if (!this.state.active && scrollY > 500) {
        this.setState({active: true});
      } else if (this.state.active && scrollY < 500) {
        this.setState({active: false});
      }
    });
  }

  renderStyle() {
    return {
      width: 40,
      height: 40,
      borderRadius: 50,
      backgroundColor: '#FF5595',
      color: 'white',
      lineHeight: '36px',
      verticalAlign: 'middle',
      textAlign: 'center',
      fontSize: 16,
      boxShadow: '2px 2px 5px 1px rgba(0, 0, 0, 0.2)',
    }
  }

  render() {
    return (
      <div style={this.renderStyle()} onClick={ this.props.toTop }>
        <span className={"fa fa-chevron-up"} />
      </div>
    );
  }
}

ToTopButton.propsType = {
  toTop: React.PropTypes.func.isRequired
};

export default ToTopButton;
