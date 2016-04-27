import React from 'react';

class DateTimeSpan extends React.Component {
  constructor(props) {
    super(props);

    this.data
  }

  renderReadableTime(datetime) {
    var _now = Date.now();
    var delta = _now - datetime;

    const _m = 60 * 1000;
    const _h = 60 * _m;
    const _d = 24 * _h;
    const _w = 7 * _d;
    const _mh = 4 * _w;
    const _y = 356 * _d;

    if (delta < _m) {
      return '1 分钟';
    } else if ( _m <= delta && delta < _h) {
      return `${Math.floor(delta/_m)} 分钟`;
    } else if ( _h <= delta && delta < _d) {
      return `${Math.floor(delta/_h)} 小时`;
    } else if (_d <= delta && delta < _w) {
      return `${Math.floor(delta/_d)} 天`;
    } else if (_w <= delta && delta < _mh) {
      return `${Math.floor(delta/_w)} 周`;
    } else if (_mh <= delta && delta < _y) {
      return `${Math.floor(delta/_mh)} 月`;
    } else {
      return "1 年前";
    }
  }

  renderNormalTime(datetime) {
    const _d = new Date(datetime);
    return _d.toLocaleFormat('%d-%b-%yy');
  }

  renderTime(type) {

    const _datetime = this.props.datetime;
    switch (type) {
      case 'Readable':
        return this.renderReadableTime(_datetime);
      case 'Normal':
        return this.renderNormalTime(_datetime);
      default:
        return this.props.datetime;
    }
  }

  render() {
    const _styles = this.props.styles;
    return (
      <span style={{
          fontSize: _styles.size,
          color: _styles.color,
          fontWeight: _styles.isBold ? 'bold' : 'normal'
      }}>

        { this.renderTime(this.props.type) }

      </span>
    );
  }
}

DateTimeSpan.propTypes = {
  styles: React.PropTypes.shape({
    size: React.PropTypes.string.isRequired,
    color: React.PropTypes.string.isRequired,
    isBold: React.PropTypes.bool.isRequired,
  }),
  type: React.PropTypes.oneOf(['Readable', 'Normal']),
  datetime: React.PropTypes.number.isRequired,
}

DateTimeSpan.defaultProps = {
  styles: {size: '12px', color: '#4f4f4f', isBold: false},
  type: 'Readable',
}

export default DateTimeSpan;
