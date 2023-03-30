const curseWords = ["ass", "fuck", "bitch", "shit", "bastard", "motherfucker", 
"dick", "asshole", "balls", "hell",
"asshat", "cum", "jizz", "cumshot", 
"blowjob", "whore", "cunt", "anus", 
"butt"];

function containsBadWord(message) {
    let words = message.toLowerCase().split(" ");
    return words.some(word => curseWords.includes(word));
}

function DonationRow(props) {
    return <tr>
        <td>
            <img height={75} width={75} src={props.donation.avatarImageURL}/>
        </td>
        <td>
            {props.donation.recipientName}
        </td>
        <td>
            {props.donation.displayName ? props.donation.displayName : "Anonymous"}
        </td>
        <td>
            ${props.donation.amount.toFixed(2)}
        </td>
        <td>
            {props.donation.message ? (
            containsBadWord(props.donation.message) ?
            "⚠️ Watch your language! ⚠️" : props.donation.message)
            : "No message!"}
        </td>
    </tr>
}
export default DonationRow