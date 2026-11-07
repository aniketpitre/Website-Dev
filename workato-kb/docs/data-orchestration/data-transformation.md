<!-- source: https://docs.workato.com/en/data-orchestration/data-transformation | lastmod: 2026-10-28 -->
> Learn how data transformation works in Workato with ETL and ELT patterns for normalizing, aggregating, enriching, and cleaning data.

# Data transformation

Data transformation converts data from one format, structure, or representation to another to meet specific requirements or objectives. This process manipulates, enriches, cleans, or restructures data, making it suitable for analysis, storage, presentation, or exchange.

Perform data transformation between the extraction and load steps of ETL or transform data after loading it to the destination in ELT.

## ELT (Extract, Load, Transform)

Use custom SQL query actions with database or data warehouse connectors to execute transformations on data already loaded into destination systems. Workato orchestrates this process by passing the SQL query to the destination system, which executes it and returns the outcome.

## ETL (Extract, Transform, Load)

Leverage Workato's [data orchestration](https://www.workato.com/platform/data-orchestration?utm_source=docs&utm_medium=referral&utm_campaign=data-orchestration) capabilities to perform transformations directly within the platform using SQL transformations or SQL collection. Workato's services execute the transformations on the data, providing the output within the recipe that you can forward to various downstream destinations.

## Example business use cases

In various business scenarios, data transformation plays a crucial role in optimizing and preparing data for effective use. The following are key examples:

### Normalization

Normalization involves ensuring data consistency and eliminating redundancy by organizing data into a standard format or structure. This step is vital for maintaining uniformity across datasets, which simplifies analysis and reporting.

### Aggregation

Aggregation combines data from multiple sources, including file systems, applications, and databases. This consolidated data can then be sent to a specific destination for analysis or reporting purposes, providing a comprehensive view of the business metrics.

### Enrichment

Enrichment enhances data by adding additional information, attributes, or derived values from external sources. This process improves the quality and value of the data, making it more informative and actionable.

### Conversion

Conversion is the process of changing data from one data type, format, or encoding to another. Examples include converting text to numeric formats or transforming CSV files to JSON format. This step ensures compatibility and usability of the data across different systems.

### Validation and cleaning

Validation and cleaning involve verifying the integrity, accuracy, and completeness of data. It includes removing or correcting errors, inconsistencies, or outliers to ensure the data meets predefined standards or criteria required to maintain a high quality of data.

### Reverse ETL

Reverse ETL refers to re-syncing data from data warehouses back to source applications after applying data standardization transformations. This approach ensures that the source applications have the most updated and standardized data for operational use.

## Further exploration

To delve deeper into data transformation, explore the following sections that cover specific techniques and tools:

### Transformation techniques

Learn how to use Workato's built-in formulas for data manipulation and transformation tasks. For more complex needs, discover how to leverage custom code for data transformations tailored to your specific requirements. [Explore more](/en/data-orchestration/how-to/data-transformation/transformation-techniques) about transformation techniques.

### Using SQL in Transformations

Explore how to perform data transformations using SQL, including an overview of SQL transformations and SQL collection methods. You can use SQL queries to execute complex transformations directly on your database or data warehouse. [Learn more](/en/data-orchestration/data-transformation/sql-transformations/sql-based) about leveraging SQL for your data transformation needs.

---
