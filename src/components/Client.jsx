
export const Client = ({ client }) => {

    const { id, name, phone, email, company } = client

    return (
        <tr>
            <td className="p-6">
                { name }
            </td>
        </tr>
    )
}
