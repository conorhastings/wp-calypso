/**
* External dependencies
*/
var React = require( 'react' ),
	PureRenderMixin = require( 'react-pure-render/mixin' );

/**
 * Internal dependencies
 */
var FollowButton = require( 'components/follow-button/button' ),
	Card = require( 'components/card/compact' );

var FollowButtons = React.createClass( {
	displayName: 'FollowButtons',

	mixins: [ PureRenderMixin ],

	render: function() {
		return (
			<div className="design-assets__group">
				<h2>
					<a href="/devdocs/design/follow-buttons">Follow Button</a>
				</h2>
				<Card>
					<span>Default:</span>
					<FollowButton following={ false } />
				</Card>
				<Card>
					<span>Following:</span>
					<FollowButton following={ true } />
				</Card>
			</div>
		);
	}
} );

module.exports = FollowButtons;
