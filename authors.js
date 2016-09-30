<script>
var favAuthors = [  'Octavia Butler',
				    'Neil Gaiman',
				    'Milan Kundera'
				 ];
</script>

<script>
document.write('<p>The first author is <strong>');
document.write(favAuthors[0] + '</strong>.</p>');
document.write('<p>The last author is <strong>');
document.write(favAuthors[favAuthors.length-1] + '</strong>.</p>');
favAuthors.unshift('Terry Goodkind');
document.write('<p>I almost forgot <strong>');
document.write(favAuthors[0] + '</strong>.</p>')
</script>