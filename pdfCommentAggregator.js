// Get the comments in this document, and sort by author
this.syncAnnotScan();
annots = this.getAnnots({nSortBy: ANSB_Author});
// Open a new report
var rep = new Report();
rep.size = 1.2;
rep.color = color.blue;
if (annots) {
    rep.writeText("Summary of Comments: By Author");
    rep.color = color.black;
    rep.writeText(" ");
    rep.writeText("Number of Comments: " + annots.length);
    rep.writeText(" ");
    rep.writeText("\n\n")
    var msg = "\200 page %s: \"%s\"";
    var theAuthor = annots[0].author;
    rep.writeText("\n");
    rep.writeText(theAuthor);
    rep.indent(20);
    for (var i=0; i < annots.length; i++) {
        if (theAuthor != annots[i].author) {
        theAuthor = annots[i].author;
        rep.writeText(" ");
        rep.outdent(20);
        rep.writeText(theAuthor);
        rep.writeText("\n");
        rep.indent(20);
        }
    rep.writeText(util.printf(msg, 1 + annots[i].page,annots[i].contents.replace(/(\r\n|\n|\r)/gm," ")));
    rep.writeText("\n");
}
} else {
    var msg = "No annotations found in this document, %s.";
    rep.writeText(util.printf(msg, this.documentFileName));
    }
// Now open the report
var docRep = rep.open("myreport.pdf");
docRep.info.Title = "Relevant Annotations";
docRep.info.Subject = "ICRAS report"
