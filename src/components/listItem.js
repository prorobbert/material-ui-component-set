(() => ({
  name: 'ListItem',
  type: 'CONTENT_COMPONENT',
  allowedTypes: ['CONTENT_COMPONENT', 'CONTAINER_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const {
      ListItem,
      ListItemText,
      ListItemIcon,
      ListItemAvatar,
      Avatar,
    } = window.MaterialUI.Core;
    const { Icons } = window.MaterialUI;
    const {
      alignItems,
      disabled,
      disableGutters,
      divider,
      selected,
      primaryText,
      secondaryText,
      icon,
      avatar,
      avatarUrl,
      avatarOrIcon,
      linkType,
      linkTo,
      linkToExternal,
      dense,
      testing,
    } = options;
    const { env, useText, Link } = B;
    const isDev = env === 'dev';

    const hasLink = linkTo && linkTo.id !== '';
    const hasExternalLink =
      linkType === 'external' && linkToExternal && linkToExternal.id !== '';
    const linkToExternalVariable =
      (linkToExternal && useText(linkToExternal)) || '';

    const primary = useText(primaryText);
    const secondary = useText(secondaryText);

    const IconComponent = (
      <ListItemIcon>
        {icon !== 'None' && React.createElement(Icons[icon])}
      </ListItemIcon>
    );

    const AvatarComponent = (
      <ListItemAvatar>
        <Avatar src={avatarOrIcon === 'avatar' && avatarUrl}>
          {avatarOrIcon === 'icon' && React.createElement(Icons[icon])}
        </Avatar>
      </ListItemAvatar>
    );

    const isEmpty =
      primary === '' &&
      secondary === '' &&
      icon === 'None' &&
      children.length === 0;

    const itemText = isEmpty && isDev ? 'Empty content' : primary;

    let linkComponent = 'li';
    if (linkType === 'internal' && hasLink) linkComponent = Link;
    if (linkType === 'external' && hasExternalLink) linkComponent = 'a';

    function testingTag() {
      if (testing && testing.length > 0) {
        return `listitem|${useText(testing)}`;
      }
      return 'listitem';
    }

    return (
      <ListItem
        button={hasLink || linkToExternalVariable}
        href={hasExternalLink ? linkToExternalVariable : undefined}
        component={linkComponent}
        endpoint={linkType === 'internal' && hasLink ? linkTo : undefined}
        alignItems={alignItems}
        disabled={disabled}
        disableGutters={disableGutters}
        divider={divider}
        selected={selected}
        className={classes.root}
        dense={dense}
        data-component={testingTag()}
      >
        {avatarOrIcon === 'avatar' || (avatarOrIcon === 'icon' && avatar)
          ? AvatarComponent
          : IconComponent}
        <ListItemText
          className={isEmpty && isDev && classes.placeholder}
          primary={itemText}
          secondary={children.length > 0 ? children : secondary}
        />
      </ListItem>
    );
  })(),
  styles: B => t => {
    const { Styling } = B;
    const style = new Styling(t);
    return {
      root: {
        color: ({ options: { titleColor } }) => style.getColor(titleColor),
        backgroundColor: ({ options: { backgroundColor } }) =>
          style.getColor(backgroundColor),
        '&.MuiButtonBase-root, &.MuiListItem-button, .MuiListItem-button:hover': {
          color: ({ options: { titleColor } }) => style.getColor(titleColor),
          backgroundColor: ({ options: { backgroundColor } }) => [
            style.getColor(backgroundColor),
            '!important',
          ],
        },
        '& .MuiListItemText-primary': {
          fontSize: ({ options: { titleSize } }) => titleSize,
          fontWeight: ({ options: { titleWeight } }) => titleWeight,
        },
        '& .MuiListItemText-secondary': {
          color: ({ options: { subtitleColor } }) =>
            style.getColor(subtitleColor),
          fontSize: ({ options: { subtitleSize } }) => subtitleSize,
          fontWeight: ({ options: { subtitleWeight } }) => subtitleWeight,
        },
        '& .MuiListItemIcon-root': {
          color: ({ options: { iconColor } }) => style.getColor(iconColor),
        },
      },
      placeholder: {
        color: '#dadde4',
      },
    };
  },
}))();
