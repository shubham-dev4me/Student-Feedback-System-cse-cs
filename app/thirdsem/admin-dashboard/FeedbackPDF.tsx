import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: 'Helvetica',
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    borderBottomStyle: 'solid',
    paddingBottom: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 10,
    marginTop: 3,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  detailsLeft: {
    width: '50%',
  },
  detailsRight: {
    width: '50%',
    textAlign: 'right',
  },
  bold: {
    fontWeight: 'bold',
  },
  subjectSection: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderBottomStyle: 'solid',
    paddingBottom: 10,
  },
  table: {
    marginBottom: 15,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderBottomStyle: 'solid',
    borderLeftWidth: 1,
    borderLeftColor: '#000',
    borderLeftStyle: 'solid',
    borderRightWidth: 1,
    borderRightColor: '#000',
    borderRightStyle: 'solid',
    minHeight: 30,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    borderBottomStyle: 'solid',
    borderLeftWidth: 1,
    borderLeftColor: '#000',
    borderLeftStyle: 'solid',
    borderRightWidth: 1,
    borderRightColor: '#000',
    borderRightStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: '#000',
    borderTopStyle: 'solid',
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
  },
  tableColQuestion: {
    width: '80%',
    borderRightWidth: 1,
    borderRightColor: '#000',
    borderRightStyle: 'solid',
    padding: 5,
    textAlign: 'left',
  },
  tableColScore: {
    width: '20%',
    padding: 5,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  statsBox: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
  },
  statsHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderBottomStyle: 'solid',
    padding: 5,
    fontWeight: 'bold',
  },
  statsValue: {
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  remarksSection: {
    marginTop: 10,
  },
  remarksLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  remarksBox: {
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    height: 40,
    marginBottom: 15,
  },
});

interface FeedbackPDFProps {
  teacherName: string;
  teacherDesignation: string;
  subject: string;
  submissionCount: string | number;
  questions: string[];
  averages: string[];
  overallAverage: string;
  percentage: string;
}

export const FeedbackPDF = ({
  teacherName,
  teacherDesignation,
  subject,
  submissionCount,
  questions,
  averages,
  overallAverage,
  percentage,
}: FeedbackPDFProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>STUDENT FEEDBACK FORM FOR TEACHING ASSESSMENT</Text>
        <Text style={styles.title}>HALDIA INSTITUTE OF TECHNOLOGY</Text>
        <Text style={styles.subtitle}>Department of CSE(Cyber Security)</Text>
      </View>

      {/* Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailsLeft}>
          <Text style={styles.bold}>DEPT: CSE(CS)</Text>
          <Text style={styles.bold}>YEAR: 2ND YEAR</Text>
        </View>
        <View style={styles.detailsRight}>
          <Text style={styles.bold}>YEAR: {new Date().getFullYear()}</Text>
          <Text style={styles.bold}>SEMESTER: 3RD</Text>
          <Text style={styles.bold}>NO. STUDENT: {submissionCount}</Text>
        </View>
      </View>

      {/* Subject and Faculty */}
      <View style={styles.subjectSection}>
        <Text style={styles.bold}>Subject Name & Code: {subject}</Text>
        <Text style={styles.bold}>FACULTY NAME: {teacherName}</Text>
      </View>

      {/* Questions Table */}
      <View style={styles.table}>
        {questions.map((question, idx) => (
          <View key={idx} style={styles.tableRow}>
            <Text style={styles.tableColQuestion}>
              {idx + 1}. {question}
            </Text>
            <Text style={styles.tableColScore}>{averages[idx]}</Text>
          </View>
        ))}
      </View>

      {/* Statistics */}
      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Text style={styles.statsHeader}>AVG FEEDBACK</Text>
          <Text style={styles.statsValue}>{overallAverage}</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.statsHeader}>PERCENTAGE</Text>
          <Text style={styles.statsValue}>{percentage}%</Text>
        </View>
      </View>

      {/* Remarks */}
      <View style={styles.remarksSection}>
        <Text style={styles.remarksLabel}>HOD REMARKS:</Text>
        <View style={styles.remarksBox} />
        <Text style={styles.remarksLabel}>PRINCIPAL REMARKS:</Text>
        <View style={styles.remarksBox} />
      </View>
    </Page>
  </Document>
);
