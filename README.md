Problem Statement

Traditional crowdfunding platforms like Kickstarter and Indiegogo face significant challenges:

![Uploading Screenshot 2024-09-09 at 3.47.59 PM.png…]()


	•	Centralized Control: Central authorities control funds, creating a single point of failure and potential for mismanagement or censorship.
	•	Lack of Transparency: Backers often lack visibility into how funds are utilized, leading to mistrust.
	•	Delayed or Incomplete Delivery: Creators may fail to deliver promised milestones, leaving backers without recourse.
	•	High Fees: Centralized platforms often charge substantial fees, reducing the funds that go directly to the project creators.

Need for a Decentralized Crowdfunding Platform

A decentralized crowdfunding platform leverages blockchain technology to address these issues:

	•	Trustless Transactions: Smart contracts ensure that funds are released only when predefined conditions are met, reducing the need for trust between parties.
	•	Transparency: All transactions and project milestones are recorded on the blockchain, providing backers with real-time visibility.
	•	Lower Fees: By eliminating intermediaries, more funds go directly to the creators.
	•	Immutable Records: The blockchain provides an unalterable history of all transactions, reducing disputes and fraud.

Platform Overview and Key Features

Key Features:

	1.	Project Creation:
	•	Creators can set up projects, define milestones, and establish funding goals.
	•	Example: A creator launching a tech gadget can set milestones for prototype completion, testing, and production.
	2.	Category-Based Project Organization:
	•	Projects are categorized (e.g., tech, arts, non-profits), allowing users to browse and support projects of interest.
	•	Example: Projects organized under tech, arts, and other categories.
	3.	Creator Equity in Exchange for Tokens:
	•	Backers receive equity tokens representing ownership in a project, allowing them to have a stake in its future success. These tokens can represent voting power or profit-sharing rights within the project’s decentralized governance.
	4.	Milestone-Based Funding:
	•	Funds are locked in smart contracts and released based on the completion of milestones.
	•	Example: For a tech gadget, backers’ funds are released after the prototype milestone is validated by a voting process.
	5.	Voting Mechanism:
	•	Backers vote on whether progress reports submitted by creators are valid.
	•	Example: The creator submits a report on the prototype; backers vote on its validity, ensuring transparency.
	6.	Dynamic Smart Contracts:
	•	Smart contracts can be customized dynamically based on the project’s category, allowing tailored rules on funding, milestone validation, and voting procedures.
	7.	Refund Mechanism:
	•	If milestones are not met or progress is unsatisfactory, funds can be refunded to backers based on voting outcomes.

Technology Stack

Frontend:

	•	React.js: For building a responsive and dynamic user interface.

Blockchain:

	•	Aptos Blockchain: High throughput, low latency, proof-of-stake consensus, and strong developer support.
	•	Move Language: Resource-oriented programming with built-in protections against reentrancy attacks and double spending.
	•	Remix IDE: Provides syntax highlighting for Move, an integrated testing environment, and seamless contract deployment.

Backend:

	•	Express.js: For handling server-side logic and API requests.
	•	Blockchain API: Facilitates interaction with the Aptos blockchain for querying contract states and transaction histories.
	•	Notification Service: Integrates with services like Twilio or SendGrid for SMS and email notifications.

Wallet Integration:

	•	WellDone Wallet: Enables secure Aptos token transactions and easy wallet connection for users.
	•	Alternatives: Martian Wallet, Petra Wallet.

Database and Storage:

	•	MongoDB: Flexible NoSQL database, with horizontal scaling and replication for reliability.
	•	Alternatives: PostgreSQL, Firebase.

Advantages Over Traditional Web2 Solutions

	1.	Decentralization: Eliminates central authority, reducing censorship and the risk of fund mismanagement.
	2.	Enhanced Security: Smart contracts automatically enforce agreements, reducing the risk of fraud.
	3.	Lower Costs: By cutting out intermediaries, transaction fees are lowered, directing more funds to creators.
	4.	Greater Control: Backers have a say in the release of funds, increasing their confidence in the project’s success.

Team Member Responsibilities

	•	Siddharth:
	•	Frontend development using React.js.
	•	Integration of the WellDone Wallet for secure token transactions.
	•	Ashu:
	•	Backend development with Express.js.
	•	Implementation of smart contracts on the Aptos blockchain for milestone-based fund release and voting mechanisms.

Conclusion

Our decentralized crowdfunding platform, Insurgence, aims to revolutionize how projects are funded by ensuring transparency, security, and fairness through blockchain technology. By addressing the flaws in traditional platforms, we provide a more reliable and efficient solution for both creators and backers, fostering innovation and trust in the crowdfunding ecosystem.
