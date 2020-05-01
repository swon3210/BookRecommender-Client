import React from "react";
import styled from "styled-components";
import { Card, Table, TableRow } from 'react-uikit-ward';
import { Link } from 'react-router-dom';

type ContentTableSectionProps = {
  sectionTitle: string;
  tableContents: Array<Object>;
};

const ContentTableSectionWrapper = styled.div`
  
`;

const ContentTableSection = ({sectionTitle, tableContents}: ContentTableSectionProps) => {

  const tableRows = tableContents.map((content, index) => {

    // 여기서 table content 추출

    return index === 0 ? <TableRow type="head" cellList={[{type: "text", data: content}]}/> : <TableRow type="body" cellList={{type:"text", data: content}} />
  });

  return (
    <ContentTableSectionWrapper>
      <Card backgroundColor="white" title={sectionTitle}>

      </Card>
    </ContentTableSectionWrapper>
  );
};

export default ContentTableSection;