// import React from "react";

// const Pricing = () => {
//   return <div>Pricing</div>;
// };

// export default Pricing;
import React from "react";

export const Pricing = () => {
    
    const step = {
        display : "flex",
        flexDirection : "Column",
        backgroundColor :"#f8f8f8"
    }

    const side1 = {
        display: "flex",
        flexDirection : "Column",
        margin :"2% 20%",
        // border : "1px solid red"
    }

    const img = {
        width:"20%",
        margin: "0% 40%",
    }

    const head1 = {
        fontSize:"40px",
        marginBottom :"-10px"
    }

    const side2 = {
        display: "flex",
        flexDirection:"Row",
        margin: "0% 10%",
    }

    const m1 = {
        display: "flex",
        flexDirection :"Column",
        margin: "0% 1%",
        backgroundColor:"white",
        padding:"2% 3%"
    }

    const button1 = {
        backgroundColor:"rgb(255,119,83)",
    }

    const topfaqs = {
        display: "flex",
        flexDirection:"Column",
        margin: "5% 5%",
    }

    // const bottomfaqs = {
    //     display: "grid",
    //     gridGap : "2%",
    //     gridTemplateColumn : "auto auto auto",
    //     gridTemplateRow : "100px 100px"
    // }
    const bottomfaqs = {
        display: "flex",
        flexDirection:"Row",
    }

    const subbottom = {
        display: "flex",
        flexDirection : "Column",
        width:"90%",
        padding: "0% 5%",
    }

    const footer = {
        display: "flex",
        flexDirection:"row",
        margin: "2% 5%",
        // border: "1px solid black"
    }

    const sub1 = {
        display: "flex",
        flexDirection:"column",
        marginRight:"20%",
        // border : "1px solid red",
        padding: "0% 1%"
    }

    const sub2 = {
        display: "grid",
        gridGap:" 1% 2%",
        gridTemplateColumns :"auto auto auto",
        gridTemplateRow :"auto auto",
        // border : "1px solid red"
    }

    const div = {
        
    }

    return (
        <div style={step}>
            <div style={side1}>
                <img style={img} src="https://accounts.coschedule.com/img/cos-logo-horz.svg" />
                <h3 style={head1}>Organize Your Marketing With Content Calendar Software by CoSchedule</h3>
                <p>Try it free. No credit card required.</p>
            </div>
            <div style={side2}>
                <div style={m1}>
                    <b>Marketing Calender</b>
                    <h1>Free</h1>
                    <p>The forever-free marketing calendar to see everything in one place.</p>
                    <h1>$0</h1>
                    <b style={{marginBottom:"20px"}}>Free Forever</b>
                    <button style={button1}>Get Started Free</button>
                    <p>Personal Project & Task Management</p>
                    <p>Unlimited Marketing Projects and content</p>
                    <p>Marketing & Project Management Integrations</p>
                    <p>Social Media Publishing</p>
                    <p>Self-Serve Knowledge Base</p>
                    <p>Basic Support</p>
                </div>
                <div style={m1}>
                    <b>Marketing Calender</b>
                    <h1>Pro</h1>
                    <p>The advanced marketing calendar with limitless publishing to gain even more control.</p>
                    <h1>$29</h1>
                    <b style={{marginBottom:"-10px"}}>per user / month</b>
                    <p style={{marginBottom:"-10px"}}>Billed Annually</p>
                    <p>Switch to Monthly</p>
                    <button style={button1}>Get Started Free</button>
                    <p>Real-Time Marketing Calendar</p>
                    <p>Unlimited Read-Only Observer Calendar Views</p>
                    <p>Simultaneous Team Member Access & Collaboration</p>
                    <p>Customizable Task Workflow Templates</p>
                    <p>Unlimited Social Media Publishing</p>
                    <p>Bulk Social Media Scheduling</p>
                    <p>Social Media Automation & Campaign Templates</p>
                    <p>Priority Support</p>
                </div>
                <div style={m1}>
                    <b>Marketing Suite</b>
                    <h1>Business</h1>
                    <p>A family of agile marketing products to complete more work and prove your team’s value</p>
                    <h1>Lets Talk</h1>
                    <button style={button1}>Contact Sales</button>

                    <p>Personal Project & Task Management</p>
                    <h5>Includes all Marketing Calendar Pro capabilities, plus:</h5>
                    <p>Calendar Team Filtering</p>
                    <p>Marketing Request Management</p>
                    <p>Multi-Channel Campaigns</p>
                    <p>Single Sign-On & Security</p>
                    <p>Custom User Access & Permissions</p>
                    <p>Automatic Marketing Campaigns</p>
                    <p>Custom Project Templates</p>
                    <p>Workflow Automation & Bottleneck Mitigation</p>
                    <p>Asset & File Management Storage</p>
                    <p>File Sharing Enablement</p>
                    <p>Detailed Project, Work, & Team Analytics</p>
                    <p>Team Performance Reporting</p>
                    <p>Advanced Premium Integrations</p>
                    <p>1:1 Customer Success Management</p>
                </div>
            </div>
            <div style={topfaqs}>
                <h1 style={{textAlign:"center"}}>FAQS</h1>
                {/* <div style={bottomfaqs}>
                    <div style={subbottom}>
                        <h4>I’m just getting started. How can I learn more about CoSchedule?</h4>
                        <p>You can start right here by digging into our Getting Started page or checking out onboarding videos in the Actionable Marketing Institute.</p>
                    </div>
                    <div style={subbottom}>
                        <h4>How do I upgrade from a Free to a Pro plan?</h4>
                        <p>It’s easy! Just visit the billing page in your account. There you can select a new plan. Once you complete the billing prompts, your account will automatically upgrade to Pro.</p>
                    </div>
                    <div style={subbottom}>
                        <h4>How do I get started with Marketing Suite?</h4>
                        <p>Click here to receive a demo of the CoSchedule Marketing Suite. You'll learn how it can help you coordinate your team, projects, and process.</p>
                    </div>
                    <div style={subbottom}>
                        <h4>Which payment types do you accept?</h4>
                        <p>Plastic is fantastic. We accept credit card payments for all of our paid plans. (Credit cards are not required for Marketing Calendar Free.) We may also accept other payment types for Marketing Suite. Check with your account executive for details. For more information on billing, visit our Billing FAQs support doc.</p>
                    </div>
                    <div style={subbottom}>
                        <h4>Do you offer discounts for nonprofits?</h4>
                        <p>To make it easier for your nonprofit to organize all of your marketing with CoSchedule, we offer a 30% discount on all of our paid plans. Click Here to learn more.</p>
                    </div>
                    <div style={subbottom}>
                        <h4>Where can I find other helpful resources?</h4>
                        <p>Our CoSchedule Guides will show you how to get totally organized in CoSchedule. And the Actionable Marketing Institute is chock full of video gold to help you maximize your marketing</p>
                    </div>
                </div>  */}
                <div style={bottomfaqs}>
                    <div style={subbottom}>
                        <h4>I’m just getting started. How can I learn more about CoSchedule?</h4>
                        <p>You can start right here by digging into our Getting Started page or checking out onboarding videos in the Actionable Marketing Institute.</p>
                    </div>
                    <div style={subbottom}>
                        <h4>How do I upgrade from a Free to a Pro plan?</h4>
                        <p>It’s easy! Just visit the billing page in your account. There you can select a new plan. Once you complete the billing prompts, your account will automatically upgrade to Pro.</p>
                    </div>
                    <div style={subbottom}>
                        <h4>How do I get started with Marketing Suite?</h4>
                        <p>Click here to receive a demo of the CoSchedule Marketing Suite. You'll learn how it can help you coordinate your team, projects, and process.</p>
                    </div>
                </div>
                <div style={bottomfaqs}>
                    <div style={subbottom}>
                        <h4>Which payment types do you accept?</h4>
                        <p>Plastic is fantastic. We accept credit card payments for all of our paid plans. (Credit cards are not required for Marketing Calendar Free.) We may also accept other payment types for Marketing Suite. Check with your account executive for details. For more information on billing, visit our Billing FAQs support doc.</p>
                    </div>
                    <div style={subbottom}>
                        <h4>Do you offer discounts for nonprofits?</h4>
                        <p>To make it easier for your nonprofit to organize all of your marketing with CoSchedule, we offer a 30% discount on all of our paid plans. Click Here to learn more.</p>
                    </div>
                    <div style={subbottom}>
                        <h4>Where can I find other helpful resources?</h4>
                        <p>Our CoSchedule Guides will show you how to get totally organized in CoSchedule. And the Actionable Marketing Institute is chock full of video gold to help you maximize your marketing</p>
                    </div>
                </div> 
            </div>
            <div style={footer}>
                <div style={sub1}>
                    <p>Sign Up</p>
                    <p>Request A Demo</p>
                    <p>Sign In</p>
                </div>
                <div style={sub2} >
                <div style={div}>
                    <h3>PRODUCTS</h3>
                    <p>Martketing Calender</p>
                    <p>Marketing Suite</p>
                    <p>Headline Studio</p>
                    <p>Actionable Marketing Institute</p>
                </div>
                <div style={div}>
                    <h3>WHY COSCHDEULE</h3>
                    <p>Customer Stories</p>
                    <p>Support</p>
                    <p>Product Announcements</p>
                    <p>Pricing</p>
                </div>
                <div style={div}>
                    <h3>COMPANY</h3>
                    <p>About</p>
                    <p>Jobs</p>
                    <p>Press</p>
                    <p>Contact US</p>
                    <p>Affilate Program</p>
                    <p>Terms & Polices</p>
                </div>
                <div style={div}>
                    <h3>RESOURCES</h3>
                    <p>CoSchedule Maketing Blog</p>
                    <p>Actionable Marketing Pocast</p>
                    <p>10x Marketing Formula Book</p>
                    <p>Get Started with Agile Marketing Book</p>
                    <p>Marketing Formula Book</p>
                </div>
                <div style={div}>
                    <h3>GUIDES</h3>
                    <p>CoSchedule Guide</p>
                    <p>Agile Marketing Guide</p>
                    <p>Marketing Strategy Guide</p>
                    <p>Contact Marketing Guide</p>
                </div>
                <div style={div}>
                    <h3>TOOLS</h3>
                    <p>Headline Analyzer</p>
                    <p>Social Message Optimizer</p>
                    <p>Email Subject Line Tester</p>
                    <p>Marketing Dictionary</p>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Pricing;