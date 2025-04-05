import React, { useState } from 'react';
import cpp from '../../assets/cpp.png'
import nodejs from '../../assets/nodejs.png'
import golang2 from '../../assets/golang2.png'
import java from '../../assets/java.png'
import laravel from '../../assets/laravel.png'
import net from '../../assets/net.png'
import php from '../../assets/php.png'
import python from '../../assets/python.png'
import ruby2 from '../../assets/ruby2.png'
import css from '../../assets/css.png'
import ember from '../../assets/ember.png'
import flutter from '../../assets/flutter.png'
import js from '../../assets/js.png'
import vuejs from '../../assets/vuejs.png'
import typescript from '../../assets/typescript.png'
import reacts from '../../assets/reacts.png'
import angular from '../../assets/angular.png'



import android from '../../assets/android.png'
import ios from '../../assets/ios.png'
import reactNative from '../../assets/reactNative.png'
import xamarin from '../../assets/xamarin.png'
import kotlin from '../../assets/kotlin.png'
import swift from '../../assets/swift.png'
import docker from '../../assets/docker.png'
import kubernetes from '../../assets/kubernetes.png'
import jenkins from '../../assets/jenkins.png'
import gitlab from '../../assets/gitlab.png'
import aws from '../../assets/aws.png'
import azure from '../../assets/azure.png'
import gcp from '../../assets/gcp.png'
import digitalOcean from '../../assets/digital-ocean.png'
import heroku from '../../assets/heroku.png'
import wordpress from '../../assets/wordpress.png'
import shopify from '../../assets/shopify.png'
import salesforce from '../../assets/salesforce.png'
import mysql from '../../assets/mysql.png'
import postgresql from '../../assets/postgresql.png'
import oracle from '../../assets/oracle.png'
import mssql from '../../assets/mssql.png'
import mongodb from '../../assets/mongodb.png'
import hadoop from '../../assets/hadoop.png'
import spark from '../../assets/spark.png'
import kafka from '../../assets/kafka.png'
import elasticsearch from '../../assets/elasticsearch.png'
import tensorflow from '../../assets/tensorflow.png'
import pytorch from '../../assets/pytorch.png'
import scikit from '../../assets/scikit.png'
import selenium from '../../assets/selenium.png'
import cypress from '../../assets/cypress.png'
import ansible from '../../assets/ansible.png'
import terraform from '../../assets/terraform.png'

const techCategories = [
  { id: 'web', name: 'Web' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'devops', name: 'DevOps' },
  { id: 'cloud', name: 'Cloud' },
  { id: 'platforms', name: 'Platforms' },
  { id: 'relational', name: 'Relational Databases' },
  { id: 'bigdata', name: 'Big Data' },
  { id: 'ml', name: 'Machine Learning' },
  { id: 'auto', name: 'Automation' }
];

const backendTech = [
  { id: 'ruby', image: ruby2, alt: 'Ruby' },
  { id: 'nodejs', image: nodejs, alt: 'Node.js' },
  { id: 'python', image: python, alt: 'Python' },
  { id: 'golang', image: golang2, alt: 'Golang' },
  { id: 'net', image: net, alt: '.NET' },
  { id: 'java', image: java, alt: 'Java' },
  { id: 'php', image: php, alt: 'PHP' },
  { id: 'cpp', image: cpp, alt: 'C++' },
  { id: 'laravel', image: laravel, alt: 'Laravel' }
];

const frontendTech = [
  { id: 'angular', image: angular, alt: 'Angular' },
  { id: 'react', image: reacts, alt: 'React' },
  { id: 'vue', image: vuejs, alt: 'Vue.js' },
  { id: 'js', image: js, alt: 'JavaScript' },
  { id: 'html-css', image: css, alt: 'HTML5/CSS3' },
  { id: 'ember', image: ember, alt: 'Ember' },
  { id: 'flutter', image: flutter, alt: 'Flutter' },
  { id: 'typescript', image: typescript, alt: 'TypeScript' }
];

// New tech categories
const mobileTech = [
  { id: 'android', image: android, alt: 'Android' },
  { id: 'ios', image: ios, alt: 'iOS' },
  { id: 'react-native', image: reactNative, alt: 'React Native' },
  { id: 'flutter-mobile', image: flutter, alt: 'Flutter' },
  { id: 'xamarin', image: xamarin, alt: 'Xamarin' },
  { id: 'kotlin', image: kotlin, alt: 'Kotlin' },
  { id: 'swift', image: swift, alt: 'Swift' }
];

const devopsTech = [
  { id: 'docker', image: docker, alt: 'Docker' },
  { id: 'kubernetes', image: kubernetes, alt: 'Kubernetes' },
  { id: 'jenkins', image: jenkins, alt: 'Jenkins' },
  { id: 'gitlab-ci', image: gitlab, alt: 'GitLab CI/CD' },
  { id: 'ansible', image: ansible, alt: 'Ansible' },
  { id: 'terraform', image: terraform, alt: 'Terraform' }
];

const cloudTech = [
  { id: 'aws', image: aws, alt: 'Amazon Web Services' },
  { id: 'azure', image: azure, alt: 'Microsoft Azure' },
  { id: 'gcp', image: gcp, alt: 'Google Cloud Platform' },
  { id: 'digital-ocean', image: digitalOcean, alt: 'Digital Ocean' },
  { id: 'heroku', image: heroku, alt: 'Heroku' }
];

const platformsTech = [
  { id: 'wordpress', image: wordpress, alt: 'WordPress' },
  { id: 'shopify', image: shopify, alt: 'Shopify' },
  { id: 'salesforce', image: salesforce, alt: 'Salesforce' }
];

const relationalDBTech = [
  { id: 'mysql', image: mysql, alt: 'MySQL' },
  { id: 'postgresql', image: postgresql, alt: 'PostgreSQL' },
  { id: 'oracle', image: oracle, alt: 'Oracle' },
  { id: 'mssql', image: mssql, alt: 'MS SQL Server' },
  { id: 'mongodb', image: mongodb, alt: 'MongoDB' }
];

const bigDataTech = [
  { id: 'hadoop', image: hadoop, alt: 'Hadoop' },
  { id: 'spark', image: spark, alt: 'Apache Spark' },
  { id: 'kafka', image: kafka, alt: 'Apache Kafka' },
  { id: 'elasticsearch', image: elasticsearch, alt: 'Elasticsearch' }
];

const mlTech = [
  { id: 'tensorflow', image: tensorflow, alt: 'TensorFlow' },
  { id: 'pytorch', image: pytorch, alt: 'PyTorch' },
  { id: 'scikit', image: scikit, alt: 'Scikit-Learn' },
  { id: 'python-ml', image: python, alt: 'Python' }
];

const automationTech = [
  { id: 'selenium', image: selenium, alt: 'Selenium' },
  { id: 'cypress', image: cypress, alt: 'Cypress' },
  { id: 'jenkins-auto', image: jenkins, alt: 'Jenkins' },
  { id: 'ansible-auto', image: ansible, alt: 'Ansible' }
];

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('web');

  // Helper function to determine which tech array to show based on active category
  const getTechForCategory = () => {
    switch (activeCategory) {
      case 'web':
        return { backend: backendTech, frontend: frontendTech };
      case 'mobile':
        return { tech: mobileTech };
      case 'devops':
        return { tech: devopsTech };
      case 'cloud':
        return { tech: cloudTech };
      case 'platforms':
        return { tech: platformsTech };
      case 'relational':
        return { tech: relationalDBTech };
      case 'bigdata':
        return { tech: bigDataTech };
      case 'ml':
        return { tech: mlTech };
      case 'auto':
        return { tech: automationTech };
      default:
        return { backend: backendTech, frontend: frontendTech };
    }
  };

  const activeTech = getTechForCategory();

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Tech Stack</h2>
        <p className="text-lg text-gray-600 mb-12">
          Our expertise spans over 100+ innovative technologies and platforms, enabling us to deliver
          customized business solutions.
        </p>

        <div className="flex justify-end mb-8 space-x-2">
         
        </div>

        <div className="border-b border-gray-200 mb-8">
          <nav className="flex overflow-x-auto pb-3 scrollbar-hide">
            {techCategories.map((category) => (
              <button
                key={category.id}
                className={`whitespace-nowrap px-6 py-3 font-medium text-sm transition-colors duration-300 mx-1 first:ml-0
                  ${activeCategory === category.id 
                    ? 'bg-dark-blue text-white rounded-t-lg' 
                    : 'text-gray-600 hover:text-orange-500'}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </nav>
        </div>

        {activeCategory === 'web' ? (
          <>
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-gray-700 mb-6">BACK END</h3>
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {backendTech.map((tech) => (
                  <div 
                    key={tech.id} 
                    className="border border-gray-200 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <img src={tech.image} alt={tech.alt} className="w-full h-16 object-contain" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-lg font-semibold text-gray-700 mb-6">FRONT END</h3>
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {frontendTech.map((tech) => (
                  <div 
                    key={tech.id}
                    className="border border-gray-200 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <img src={tech.image} alt={tech.alt} className="w-full h-16 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-700 mb-6">{techCategories.find(cat => cat.id === activeCategory)?.name.toUpperCase()}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {activeTech.tech?.map((tech) => (
                <div 
                  key={tech.id} 
                  className="border border-gray-200 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <img src={tech.image} alt={tech.alt} className="w-full h-16 object-contain" />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-center">
          <button className="bg-dark-blue hover:bg-orange-500 text-white px-6 py-3 rounded flex items-center transition-colors duration-300">
            EXPLORE ALL
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechStack;