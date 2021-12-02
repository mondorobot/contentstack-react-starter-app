import React, {useEffect, useState, useCallback} from 'react';
import * as S from './styles';
import Stack from '../../sdk/entry';

const SuggestedSidebar = () => {
  const [content, setContent] = useState();

  const fetchContent = useCallback(
    async () => {
      try {
        const data = await Stack.getEntry('demo_link_list');
        console.log(data[0][0])
        setContent(data[0][0]);
      } catch(error) {
        console.error(error);
      }
    },
    [setContent],
  );

  useEffect(async () => {
    fetchContent();
  },[fetchContent]);

  if (!content) {
    return null;
  }

  return (
    <S.LinkList>
      {content?.page_group?.map((group, index) => {
        return (
          <S.PageGroup key={`page-group-${index}`}>
            <S.PageName>{group.title}</S.PageName>
            {group.link?.map((link, linkIndex) => {
              return (
                <S.PageLink href={link.href} key={`page-group-${index}-link-${linkIndex}`}>{link.title}</S.PageLink>
              );
            })}
          </S.PageGroup>
        );
      })}
    </S.LinkList>
  );
};

export default SuggestedSidebar;